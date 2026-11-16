import { useState, useCallback } from 'react';

/**
 * Hook to trigger high-resolution canvas screenshots
 */
export function useScreenshot() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const capture = useCallback((canvasElement, productName = 'product') => {
    if (!canvasElement) {
      console.warn('Screenshot failed: Canvas element not available');
      return;
    }

    try {
      setIsCapturing(true);

      // Extract image data from canvas
      const dataUrl = canvasElement.toDataURL('image/png', 1.0);

      // Create download link
      const link = document.createElement('a');
      const sanitizedName = productName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
      link.download = `${sanitizedName}-3d-view-${timestamp}.png`;
      link.href = dataUrl;
      link.click();

      // Show toast
      setToastMessage(`Snapshot saved: ${link.download}`);
      setTimeout(() => setToastMessage(null), 3500);
    } catch (err) {
      console.error('Screenshot error:', err);
      setToastMessage('Failed to capture screenshot');
      setTimeout(() => setToastMessage(null), 3500);
    } finally {
      setIsCapturing(false);
    }
  }, []);

  return { capture, isCapturing, toastMessage, clearToast: () => setToastMessage(null) };
}

