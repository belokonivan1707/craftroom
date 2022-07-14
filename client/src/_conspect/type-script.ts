interface Depression {
  symptoms: string[];
  therapy: {
    pharmaceuticals: string[];
    recommendation: string[];
  };
}

// Utility Types
// Partial<Type> symptoms: Partial<Depression>
class Psychologist {
  readonly depression: Depression = {
    symptoms: ['soul pain', 'stressfull', 'suicidal thoughts'],
    therapy: {
      pharmaceuticals: [''],
      recommendation: ['']
    }
  };

  checkSymptoms({ symptoms }: Partial<Depression>) {
    let count = 0;
    if (symptoms) {
      symptoms.forEach(user_symptom => {
        const coincidence = this.depression.symptoms.find(depression_symptom => depression_symptom === user_symptom);
        if (coincidence) {
          count += 1;
        }
      });
    }
    return `you have ${count} symptoms`;
  }
}

export const doctor = new Psychologist();

// Generics
// <T>
export const whatIsT = <T>(item: T) => {
  return item
}

whatIsT(1)
whatIsT('string')
whatIsT({})
// 1. Explain generics in TypeScript
// Generics are able to create a component or function to work over a variety of types rather than a single one.
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = () => this.data.shift();
}

const queue = new Queue<number>();
queue.push(0);
// queue.push("1"); // ERROR : cannot push a string. Only numbers allowed

// 2. How to call base class constructor from child class in TypeScript?
// We can call base class constructor using super().