// https://www.codewars.com/kata/536e9a7973130a06eb000e9f

#include <string.h>

#define base_attack 50
#define strong 2.0
#define neutral 1.0
#define weak 0.5

double effectiveness(const char *att_type, const char *def_type) {
  #define for_att_type(s) if (strcmp(att_type, s) == 0)
  #define attacking(s) if (strcmp(def_type, s) == 0)
  #define is(mult) { return mult; }

  for_att_type("fire") {
    attacking("fire")is(weak);
    attacking("water")is(weak);
    attacking("grass")is(strong);
    attacking("electric")is(neutral);
  }
  for_att_type("water") {
    attacking("fire")is(strong);
    attacking("water")is(weak);
    attacking("grass")is(weak);
    attacking("electric")is(weak);
  }
  for_att_type("grass") {
    attacking("fire")is(weak);
    attacking("water")is(strong);
    attacking("grass")is(weak);
    attacking("electric")is(neutral);
  }
  for_att_type("electric") {
    attacking("fire")is(neutral);
    attacking("water")is(strong);
    attacking("grass")is(neutral);
    attacking("electric")is(weak);
  }

  #undef for_att_type
  #undef attacking
  #undef is
}

int calculate_damage(const char *att_type, const char *def_type, int attack, int defense) {
  double damage = base_attack * (attack / defense) * effectiveness(att_type, def_type);
  return (int) damage;
}

#undef base_attack
#undef strong
#undef neutral
#undef weak

