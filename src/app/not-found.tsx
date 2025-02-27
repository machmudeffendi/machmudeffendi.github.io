export default async function NotFound() {
  return (
    <div className="flex flex-col justify-center gap-[50px] h-full">
      <div className="flex flex-col leading-none">
        <span className="text-white text-[64px] font-bold">404</span>
        <span className="text-white text-[20px]">The page you're looking for doesn't exist or has been moved</span>
      </div>
    </div>
  )
}