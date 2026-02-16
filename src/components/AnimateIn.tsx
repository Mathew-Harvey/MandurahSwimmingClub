import { useInView } from '../hooks/useInView'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale' | 'blur'

interface AnimateInProps {
  children: React.ReactNode
  type?: AnimationType
  delay?: number
  className?: string
}

export default function AnimateIn({
  children,
  type = 'fade-up',
  delay = 0,
  className = '',
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`animate-in animate-${type} ${inView ? 'in-view' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
