import { industries } from "@/data/industries"
import OnboardingForm from "./_component/onboarding-form"
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";


const OnboardingPage = async () => {
    // Check if User is onboarded
    const { isOnboarded } = await getUserOnboardingStatus();
    if(isOnboarded) {
        redirect("/dashboard");
    }

  return (
    <main>
        <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage