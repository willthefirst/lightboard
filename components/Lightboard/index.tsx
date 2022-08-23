import { useEffect, useRef } from "react"

type Props = {
  width: number,
  height: number
}

function Lightboard({ width, height}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, width, height);
    }
  }, [canvasRef, height, width])
  
  
  return (
    <canvas ref={canvasRef} width={width} height={height}></canvas>
  )
}

export default Lightboard;
