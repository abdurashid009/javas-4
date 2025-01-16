// Ismni so'rash
let ism = prompt("Ismingizni kiriting:");

// Harfni so'rash
let harf = prompt("Bironta harfni kiriting:");

// Harf ismda borligini katta-kichik harf farqini hisobga olmasdan tekshirish
if (ism.toLowerCase().includes(harf.toLowerCase())) {
  alert(`${ism} ismida ${harf} harfi bor.`);
} else {
  alert(`${ism} ismida ${harf} harfi yo'q.`);
}
