import { WorkSection } from "@/components/work-section"
import { SignalsSection } from "@/components/signals-section"

export default function SolutionsPage() {
  return (
    <div className="pt-24 pb-12">
      <SignalsSection />
      <div className="mt-8">
        <WorkSection />
      </div>
    </div>
  )
}
