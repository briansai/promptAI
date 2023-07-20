import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) return new Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(prompts, { status: 200 }));
  } catch (err) {
    return new Response(
      JSON.stringify('Failed to fetch all prompts', { status: 500 })
    );
  }
};
