export default class PetDTO {
    static getPetInputFrom = (pet) => {
        return {
            name: pet.name || '',
            specie: pet.specie || '',
            image: pet.image || '',
            birthDate: pet.birthDate || '01-01-2000',
            adopted: false
        }
    }
}