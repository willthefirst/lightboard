import { useEffect, useRef } from "react"

type Props = {}

function Lightboard({}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 150, 100);
    }
  }, [canvasRef])
  
  
  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default Lightboard;
