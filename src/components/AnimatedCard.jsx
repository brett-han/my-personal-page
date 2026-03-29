export default function AnimatedCard({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
