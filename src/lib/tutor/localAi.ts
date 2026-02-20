/**
 * Optional Advanced Mode (local, zero API cost after model download).
 *
 * This module is intentionally lazy-loaded by the UI so normal users do not
 * pay the bundle/model cost. The first run downloads a ~1.5GB 4-bit model.
 *
 * Suggested models:
 * - WebLLM: Phi-3-mini-4k-instruct-q4f16_1
 * - transformers.js: Xenova/Phi-3-mini-4k-instruct
 */

export type LocalTutorOptions = {
  prompt: string;
  system?: string;
};

export async function askLocalTutorWithWebLLM(opts: LocalTutorOptions): Promise<string> {
  // Optional dependency: @mlc-ai/web-llm
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const webllm = await import('@mlc-ai/web-llm');

  const engine = await webllm.CreateMLCEngine({
    model: 'Phi-3-mini-4k-instruct-q4f16_1',
    initProgressCallback: (report: unknown) => {
      console.log('[WebLLM init]', report);
    }
  });

  const completion = await engine.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: opts.system ?? 'Explain vocabulary for a 10-year-old learner using simple English.'
      },
      { role: 'user', content: opts.prompt }
    ],
    temperature: 0.5,
    max_tokens: 220
  });

  return completion.choices?.[0]?.message?.content ?? 'No local response returned.';
}

export async function askLocalTutorWithTransformers(opts: LocalTutorOptions): Promise<string> {
  // Optional dependency: @xenova/transformers
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { pipeline } = await import('@xenova/transformers');

  const generator = await pipeline('text-generation', 'Xenova/Phi-3-mini-4k-instruct', {
    dtype: 'q4',
    device: 'webgpu'
  });

  const prompt = `${opts.system ?? 'You are a helpful vocabulary tutor for children.'}\n\nUser: ${opts.prompt}\nTutor:`;
  const out = await generator(prompt, { max_new_tokens: 180, temperature: 0.6 });
  return out?.[0]?.generated_text ?? 'No local response returned.';
}
