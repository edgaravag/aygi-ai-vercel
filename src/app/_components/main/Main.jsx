import React from 'react'
import WelcomeSection from '../../../components/pages/landing/mainSection/WelcomeSection'
import AppStoresSection from '../../../components/pages/landing/mainSection/AppStoresSection'
import AppDescriptionSection from '../../../components/pages/landing/mainSection/AppDescriptionSection'
import GetAdviceSection from '../../../components/pages/landing/mainSection/GetAdviceSection'
import PlantExploringSection from '../../../components/pages/landing/mainSection/PlantExploringSection'
import AppFunctionalitySection from '../../../components/pages/landing/mainSection/AppFunctionalitySection'
import PopularQuestionsSection from '../../../components/pages/landing/mainSection/PopularQuestionsSection'

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
