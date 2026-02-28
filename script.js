// Improved JavaScript Code

// Function to calculate nutritional values
function calculateNutrition(ingredients) {
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        throw new Error('Invalid input: ingredients should be a non-empty array.');
    }

    return ingredients.reduce((total, item) => {
        if (!item || !item.calories) {
            console.warn('Item is invalid or missing calories:', item);
            return total;
        }
        return total + item.calories;
    }, 0);
}

// Function to display nutritional information
function displayNutrition(nutritionInfo) {
    if (typeof nutritionInfo !== 'number' || nutritionInfo < 0) {
        throw new Error('Invalid nutrition info: must be a non-negative number.');
    }
    console.log(`Total Nutrition Value: ${nutritionInfo} calories`);
}

// Example usage
try {
    const ingredients = [
        { name: 'Apple', calories: 95 },
        { name: 'Banana', calories: 105 },
        { name: null, calories: 50 } // Simulated invalid entry for testing
    ];
    const totalNutrition = calculateNutrition(ingredients);
    displayNutrition(totalNutrition);
} catch (error) {
    console.error('Error:', error.message);
}