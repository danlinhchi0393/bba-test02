function upgradeCrew(){
  const pirates = [
    { name: "Luffy", bounty: 3000000000, strength: 600 },
    { name: "Zoro", bounty: 1111000000, strength: 450 },
    { name: "Sanji", bounty: 1032000000, strength: 400 },
    { name: "Usopp", bounty: 500000000, strength: 200 },
    { name: "Nami", bounty: 366000000, strength: 150 }
  ];

let awakednedPirates = pirates.map(pirate => ({
  name: pirate.name.toUpperCase(),
  bounty: pirate.bounty * 1.5,
  strength: pirate.strength * 1.5
}));

let monsterTrinoCandidates = pirates.filter(pirate => pirate.strength > 500);

return {
  crew: pirates,
  awakednedCrew: awakednedPirates,
  monsterTrinoCandidates: monsterTrinoCandidates    
}
}

console.log(upgradeCrew());

function printBountyLeaderboard() {
  const crewList = [
    { name: "Luffy", bounty: 3000000000 },
    { name: "Zoro", bounty: 1111000000 },
    { name: "Sanji", bounty: 1032000000 },
    { name: "Usopp", bounty: 500000000 },
    { name: "Nami", bounty: 366000000 }
  ];
  const medals = ["🥇", "🥈", "🥉"];
  let sortedCrew = crewList.sort((a, b) => b.bounty - a.bounty);
  console.log("Bounty Leaderboard:");
  for ( let i=0; i<sortedCrew.length; i++) {
    if (i<3) {
      console.log(`${medals[i]} ${i + 1}. ${sortedCrew[i].name}: ${sortedCrew[i].bounty}`);
    } else {
      console.log(`   ${i + 1}. ${sortedCrew[i].name}: ${sortedCrew[i].bounty}`);
    }
  }
}

printBountyLeaderboard();