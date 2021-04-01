// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

class DeadFish {
    int value = 0
    List<Integer> outputs = []
    
    def apply (char command) {
        switch (command) {
            case 'i': this.value++; break
            case 'd': this.value--; break
            case 's': this.value *= this.value; break
            case 'o': this.outputs.add(this.value)
        }
    }
    
    static def parse (String commands) {
        DeadFish df = new DeadFish()
        commands.chars().forEach({ c -> df.apply((char) c) })
        return df.outputs
    }
}

