import { useEffect, useRef } from "react"
import { Grid } from '../../canvas/grid/Grid';
import { Light } from '../../canvas/light/Light';

type Props = {
  width: number,
  height: number,
  rows: number,
  cols: number
}

function Lightboard({ width, height, rows, cols}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Add rows and cols
    const board = new Grid({rows, cols, factory: () => new Light()})

    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      // Draw background
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, width, height);

      // Draw lights onto the grid
      for (let y = 0; y < board.state.length; y++) {
        for (let x = 0; x < board.state[y].length; x++) {
          const itemX = (width / cols) * y;
          const itemY = (height / rows) * x;
          const itemWidth = width / cols
          const itemHeight = height / rows;
          
          ctx.beginPath();
          ctx.rect(itemX, itemY, itemWidth, itemHeight);
          ctx.stroke()
        }
      }

    }
  }, [canvasRef, height, width, rows, cols])
  
  
  return (
    <canvas ref={canvasRef} width={width} height={height}></canvas>
  )
}

export default Lightboard;
