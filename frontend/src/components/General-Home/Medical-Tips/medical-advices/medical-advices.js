// import randomMedicalTips from "../random-medical-tips/random-medical-tips"

 function medicalTips() {

        

const medicalAdvices = [
    'Eat a healthy diet', ' Consume less salt and sugar', 'Reduce intake of harmful fats', 
    ' Avoid harmful use of alcohol', 'Don’t smoke', 'Be active', 'Check your blood pressure regularly',
      'Get tested', 'Get vaccinated', 'Practice safe sex', 'Cover your mouth when coughing or sneezing',
      ' Prevent mosquito bites', 'Follow traffic laws', ' Drink only safe water', 
      ' Breastfeed babies from 0 to 2 years and beyond', 'Talk to someone you trust if you\'re feeling down',
      'Take antibiotics only as prescribed', 'Clean your hands properly', 
      'Prepare your food correctly', 'Have regular check-ups', 'Visit your doctor regularly',
      'Limit sugary drinks', ' Eat nuts and seeds', 'Avoid ultra-processed foods', 
      'Don’t fear coffee', 'Eat fatty fish', 'Get enough sleep', 'Feed your gut bacteria', 
      'Stay hydrated', 'Don’t eat heavily charred meats', ' Avoid bright lights before sleep', 
      'Take vitamin D if you’re deficient', 'Eat plenty of fruits and vegetables', 
      'Eat adequate protein', 'Get moving', 'Don’t smoke or use drugs, and only drink in moderation',
      'Use extra virgin olive oil', 'Minimize your sugar intake', 'Limit refined carbs', 
      'Don’t fear saturated fat', 'Lift heavy weights', 'Avoid artificial trans fats', 
      'Use plenty of herbs and spices', 'Nurture your social relationships', 
      'Occasionally track your food intake', 'Get rid of excess belly fat', 'Avoid restrictive diets', 
      'Eat whole eggs', 'Meditate'
  ]



    return medicalAdvices[Math.floor(Math.random()*medicalAdvices.length)]


  }


    


export default medicalTips


