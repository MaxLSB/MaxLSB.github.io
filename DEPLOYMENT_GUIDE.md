# GGUF Model Deployment Guide

This guide walks you through hosting a GGUF model on Hugging Face Spaces and integrating it with your website.

## Step 1: Prepare Your GGUF Model

1. **Convert your model to GGUF format** (if not already):
   ```bash
   # Using llama.cpp tools
   python convert.py your-model.bin --outfile your-model.gguf
   ```

2. **Choose an appropriate quantization**:
   - Q4_K_M: Good balance of size and quality
   - Q8_0: Higher quality, larger size
   - Q2_K: Smallest size, lower quality

## Step 2: Create Hugging Face Space

1. **Go to [Hugging Face Spaces](https://huggingface.co/spaces)**
2. **Click "Create new Space"**
3. **Fill in the details**:
   - Name: `your-model-chat`
   - SDK: `Gradio`
   - Hardware: `CPU basic` (free) or `CPU upgrade` (paid)
   - Visibility: `Public` or `Private`

## Step 3: Upload Files to Your Space

Upload these files to your Space repository:

1. **`app.py`** - The Gradio application (provided in `gradio-space/`)
2. **`requirements.txt`** - Dependencies (provided in `gradio-space/`)
3. **`README.md`** - Documentation (provided in `gradio-space/`)
4. **Your GGUF model file** - Upload as `model.gguf` or update the path in `app.py`

## Step 4: Configure Your Model

In `app.py`, update the model path if needed:

```python
model_path = os.getenv("MODEL_PATH", "your-model.gguf")
```

## Step 5: Deploy and Test

1. **Push your files** to the Space repository
2. **Wait for deployment** (usually 2-5 minutes)
3. **Test the interface** by visiting your Space URL
4. **Check the API** by clicking "Use via API" at the bottom

## Step 6: Integrate with Your Website

1. **Update the API URL** in `src/pages/chat.astro`:
   ```typescript
   const API_URL = "https://your-username-your-space-name.hf.space/api/predict/";
   ```

2. **Add the chat page** to your navigation (optional)

3. **Test the integration** by visiting `/chat` on your website

## Alternative: Hugging Face Inference Endpoints

For production use, consider Hugging Face Inference Endpoints instead:

1. **Go to [Inference Endpoints](https://huggingface.co/inference-endpoints)**
2. **Create new endpoint**
3. **Select your model repository**
4. **Choose GGUF option**
5. **Select hardware configuration**
6. **Deploy**

This gives you an OpenAI-compatible API endpoint.

## Troubleshooting

### Common Issues

1. **Model too large**: Use a smaller quantization or upgrade hardware
2. **Memory errors**: Reduce `n_ctx` in `app.py`
3. **Slow responses**: Optimize model parameters or upgrade hardware
4. **CORS errors**: Ensure your Space allows cross-origin requests

### Performance Optimization

1. **Adjust model parameters** in `app.py`:
   ```python
   llm = Llama(
       model_path=model_path,
       n_ctx=1024,  # Reduce for smaller models
       n_threads=2,  # Adjust based on CPU cores
       verbose=False
   )
   ```

2. **Optimize generation parameters**:
   ```python
   response = model(
       message,
       max_tokens=256,  # Reduce for faster responses
       temperature=0.7,
       top_p=0.9
   )
   ```

## Security Considerations

1. **Rate limiting**: Implement rate limiting in your Gradio app
2. **Input validation**: Sanitize user inputs
3. **Authentication**: Consider adding API keys for private models
4. **Monitoring**: Monitor usage and costs

## Cost Considerations

- **Free tier**: Limited to CPU basic hardware
- **Paid tiers**: Better hardware, higher limits
- **Inference Endpoints**: Pay-per-use pricing
- **Model size**: Larger models require more resources

## Next Steps

1. **Monitor performance** and adjust parameters
2. **Add error handling** and user feedback
3. **Implement conversation memory** if needed
4. **Add model switching** capabilities
5. **Optimize for mobile** devices
