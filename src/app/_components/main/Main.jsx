import WelcomeSection from './_components/WelcomeSection'
import AppStoresSection from './_components/AppStoresSection'
import AppDescriptionSection from './_components/AppDescriptionSection'
import GetAdviceSection from './_components/GetAdviceSection'
import PlantExploringSection from './_components/PlantExploringSection'
import AppFunctionalitySection from './_components/AppFunctionalitySection'
import PopularQuestionsSection from './_components/PopularQuestionsSection'

const Main = () => {
  return (
		<main className='flex flex-col justify-center '>
			<WelcomeSection />
			<AppStoresSection />
			<AppDescriptionSection />
			<GetAdviceSection />
			<PlantExploringSection />
			<AppFunctionalitySection />
			<PopularQuestionsSection />
		</main>
  )
}

export default Main
