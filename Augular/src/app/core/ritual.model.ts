
export interface Ritual {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  caloriesPerServing: number;
  rating: number;
  image: string;
  mealType: string[]; 
}

export interface ApiResponse {
  recipes: Ritual[];
  total: number;
  skip: number;
  limit: number;
}