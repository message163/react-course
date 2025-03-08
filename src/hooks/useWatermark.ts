import { useEffect, useState } from "react"
export interface WatermarkOptions {
    content: string // 水印文本
    width?: number  // 水印宽度
    height?: number // 水印高度
    fontSize?: number // 水印字体大小
    fontColor?: string // 水印字体颜色
    zIndex?: number // 水印层级
    rotate?: number // 水印旋转角度
    gapX?: number // 水印横向间距
    gapY?: number // 水印纵向间距
}
// 默认配置
const defaultOptions = (): Partial<WatermarkOptions> => {
    const { width, height } = document.documentElement.getBoundingClientRect()
    return {
        width: width,
        height: height,
        fontSize: 16,
        fontColor: 'black',
        zIndex: 9999,
        rotate: -30,
        gapX: 200,
        gapY: 100
    }
}

export const useWatermark = (options: WatermarkOptions) => {
    const [watermarkOptions, setWatermarkOptions] = useState<WatermarkOptions>(options)
    const opts = Object.assign({}, defaultOptions(), watermarkOptions)
    const updateWatermark = (newOptions: Partial<WatermarkOptions>) => {
        setWatermarkOptions(prev => ({
            ...prev,
            ...newOptions
        }))
    }
    useEffect(() => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = opts.gapX!
        canvas.height = opts.gapY!
        ctx.translate(opts.gapX! / 2, opts.gapY! / 2) 
        ctx.rotate((opts.rotate! * Math.PI) / 180) 
        ctx.font = `${opts.fontSize}px sans-serif`
        ctx.textAlign = 'center'
        ctx.fillStyle = opts.fontColor!
        ctx.globalAlpha = 0.15
        ctx.fillText(opts.content, 0, 0)
        const watermarkDiv = document.createElement('div')
        watermarkDiv.id = 'watermark'
        watermarkDiv.style.position = 'fixed'
        watermarkDiv.style.top = '0'
        watermarkDiv.style.left = '0'
        watermarkDiv.style.width = `${opts.width}px`
        watermarkDiv.style.height = `${opts.height}px`
        watermarkDiv.style.pointerEvents = 'none'
        watermarkDiv.style.zIndex = `${opts.zIndex}`
        watermarkDiv.style.overflow = 'hidden'
        watermarkDiv.style.backgroundImage = `url(${canvas.toDataURL()})`
        watermarkDiv.style.backgroundSize = `${opts.gapX}px ${opts.gapY}px`
        document.body.appendChild(watermarkDiv)
        document.body.appendChild(canvas)
        return () => {
            document.body.removeChild(watermarkDiv)
        }
    }, [opts])

    return [updateWatermark, opts] as const
}