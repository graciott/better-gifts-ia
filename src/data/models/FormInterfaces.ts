export interface StepOneData {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    hobbies: string[];
}

export interface StepTwoData {
    giftType: 'emotional' | 'practical';
    specificRequest: string;
    budget: number;
    giftPreferences: string[];
    avoidGifts: string;
}

export interface FormData {
    stepOne: StepOneData;
    stepTwo: StepTwoData;
}