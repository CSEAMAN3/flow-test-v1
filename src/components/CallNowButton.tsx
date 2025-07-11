
interface CallNowButtonProps {
  className?: string 
}


export default function CallNowButton({className} : CallNowButtonProps) {
  return (
    <a href="tel:+447957340793" aria-label="Call our 24/7 service now" className={`bg-accent font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 ${className}`}>
      Call Now on 01603 339135
    </a>
  )
}
