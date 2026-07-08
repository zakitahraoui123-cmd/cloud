import {RawImage,AutoTokenizer,AutoProcessor,CLIPVisionModel,CLIPTextModel} from '@huggingface/transformers';

export const token = await AutoTokenizer.from_pretrained('Xenova/clip-vit-base-patch32');
export const textModel = await CLIPTextModel.from_pretrained('Xenova/clip-vit-base-patch32');

export const processer= await AutoProcessor.from_pretrained('Xenova/clip-vit-base-patch32');



export const ImageModle = await CLIPVisionModel.from_pretrained('Xenova/clip-vit-base-patch32')
