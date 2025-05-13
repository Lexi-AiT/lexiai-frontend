import { Button } from "@/components/ui/button"

export default function ProUpgrade() {
  return (
    <div className="rounded-lg bg-purple-600 text-white p-4 shadow-xl">
      <div className="flex justify-center mb-2">
        <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M18 6a4 4 0 0 0-4-4 7 7 0 0 0-5 2v14a7 7 0 0 0 5 2 4 4 0 0 0 4-4V6Z" />
            <path d="M6 6a4 4 0 0 1 4-4 7 7 0 0 1 5 2v14a7 7 0 0 1-5 2 4 4 0 0 1-4-4V6Z" />
          </svg>
        </div>
      </div>
      <h3 className="text-center font-bold mb-1">Go unlimited with PRO</h3>
      <p className="text-xs text-purple-100 mb-3">
        Transform your legal processes, enhance efficiency, and access tailored solutions with the power of Lexiai's Pro
        features.
      </p>
      <Button className="w-full bg-white text-purple-600 hover:bg-purple-50">
        Get started with PRO
      </Button>
    </div>
  )
}
