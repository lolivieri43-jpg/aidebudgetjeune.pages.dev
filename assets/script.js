const CITY_DATA = [
  {
    "name": "Paris",
    "region": "Île-de-France",
    "type": "Très grande ville",
    "slug": "paris",
    "loyer": 850,
    "transport": 88,
    "alimentation": 290,
    "divers": 45
  },
  {
    "name": "Lyon",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Grande métropole",
    "slug": "lyon",
    "loyer": 650,
    "transport": 25,
    "alimentation": 260,
    "divers": 40
  },
  {
    "name": "Marseille",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Grande métropole",
    "slug": "marseille",
    "loyer": 560,
    "transport": 40,
    "alimentation": 250,
    "divers": 38
  },
  {
    "name": "Toulouse",
    "region": "Occitanie",
    "type": "Grande ville étudiante",
    "slug": "toulouse",
    "loyer": 560,
    "transport": 18,
    "alimentation": 245,
    "divers": 36
  },
  {
    "name": "Bordeaux",
    "region": "Nouvelle-Aquitaine",
    "type": "Grande ville étudiante",
    "slug": "bordeaux",
    "loyer": 620,
    "transport": 38,
    "alimentation": 255,
    "divers": 38
  },
  {
    "name": "Lille",
    "region": "Hauts-de-France",
    "type": "Grande ville étudiante",
    "slug": "lille",
    "loyer": 540,
    "transport": 32,
    "alimentation": 245,
    "divers": 35
  },
  {
    "name": "Nantes",
    "region": "Pays de la Loire",
    "type": "Grande ville étudiante",
    "slug": "nantes",
    "loyer": 550,
    "transport": 30,
    "alimentation": 245,
    "divers": 35
  },
  {
    "name": "Rennes",
    "region": "Bretagne",
    "type": "Grande ville étudiante",
    "slug": "rennes",
    "loyer": 520,
    "transport": 25,
    "alimentation": 240,
    "divers": 34
  },
  {
    "name": "Grenoble",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville étudiante",
    "slug": "grenoble",
    "loyer": 500,
    "transport": 20,
    "alimentation": 235,
    "divers": 34
  },
  {
    "name": "Montpellier",
    "region": "Occitanie",
    "type": "Grande ville étudiante",
    "slug": "montpellier",
    "loyer": 540,
    "transport": 28,
    "alimentation": 245,
    "divers": 35
  },
  {
    "name": "Nice",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Grande ville",
    "slug": "nice",
    "loyer": 650,
    "transport": 40,
    "alimentation": 260,
    "divers": 40
  },
  {
    "name": "Strasbourg",
    "region": "Grand Est",
    "type": "Grande ville étudiante",
    "slug": "strasbourg",
    "loyer": 520,
    "transport": 30,
    "alimentation": 240,
    "divers": 35
  },
  {
    "name": "Dijon",
    "region": "Bourgogne-Franche-Comté",
    "type": "Ville moyenne",
    "slug": "dijon",
    "loyer": 430,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Besançon",
    "region": "Bourgogne-Franche-Comté",
    "type": "Ville moyenne",
    "slug": "besancon",
    "loyer": 400,
    "transport": 25,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Clermont-Ferrand",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "clermont-ferrand",
    "loyer": 420,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Saint-Étienne",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "saint-etienne",
    "loyer": 380,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Angers",
    "region": "Pays de la Loire",
    "type": "Ville étudiante",
    "slug": "angers",
    "loyer": 450,
    "transport": 30,
    "alimentation": 230,
    "divers": 30
  },
  {
    "name": "Tours",
    "region": "Centre-Val de Loire",
    "type": "Ville étudiante",
    "slug": "tours",
    "loyer": 460,
    "transport": 32,
    "alimentation": 230,
    "divers": 30
  },
  {
    "name": "Orléans",
    "region": "Centre-Val de Loire",
    "type": "Ville moyenne",
    "slug": "orleans",
    "loyer": 450,
    "transport": 32,
    "alimentation": 230,
    "divers": 30
  },
  {
    "name": "Caen",
    "region": "Normandie",
    "type": "Ville étudiante",
    "slug": "caen",
    "loyer": 430,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Rouen",
    "region": "Normandie",
    "type": "Ville étudiante",
    "slug": "rouen",
    "loyer": 450,
    "transport": 35,
    "alimentation": 230,
    "divers": 32
  },
  {
    "name": "Le Havre",
    "region": "Normandie",
    "type": "Ville moyenne",
    "slug": "le-havre",
    "loyer": 410,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Amiens",
    "region": "Hauts-de-France",
    "type": "Ville étudiante",
    "slug": "amiens",
    "loyer": 420,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Reims",
    "region": "Grand Est",
    "type": "Ville étudiante",
    "slug": "reims",
    "loyer": 450,
    "transport": 32,
    "alimentation": 230,
    "divers": 32
  },
  {
    "name": "Metz",
    "region": "Grand Est",
    "type": "Ville moyenne",
    "slug": "metz",
    "loyer": 430,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Nancy",
    "region": "Grand Est",
    "type": "Ville étudiante",
    "slug": "nancy",
    "loyer": 430,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Mulhouse",
    "region": "Grand Est",
    "type": "Ville moyenne",
    "slug": "mulhouse",
    "loyer": 390,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Brest",
    "region": "Bretagne",
    "type": "Ville étudiante",
    "slug": "brest",
    "loyer": 410,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Lorient",
    "region": "Bretagne",
    "type": "Ville moyenne",
    "slug": "lorient",
    "loyer": 400,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Vannes",
    "region": "Bretagne",
    "type": "Ville moyenne",
    "slug": "vannes",
    "loyer": 430,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Poitiers",
    "region": "Nouvelle-Aquitaine",
    "type": "Ville étudiante",
    "slug": "poitiers",
    "loyer": 390,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Limoges",
    "region": "Nouvelle-Aquitaine",
    "type": "Ville moyenne",
    "slug": "limoges",
    "loyer": 380,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "La Rochelle",
    "region": "Nouvelle-Aquitaine",
    "type": "Ville moyenne",
    "slug": "la-rochelle",
    "loyer": 500,
    "transport": 30,
    "alimentation": 235,
    "divers": 32
  },
  {
    "name": "Pau",
    "region": "Nouvelle-Aquitaine",
    "type": "Ville moyenne",
    "slug": "pau",
    "loyer": 410,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Bayonne",
    "region": "Nouvelle-Aquitaine",
    "type": "Ville moyenne",
    "slug": "bayonne",
    "loyer": 520,
    "transport": 30,
    "alimentation": 240,
    "divers": 32
  },
  {
    "name": "Perpignan",
    "region": "Occitanie",
    "type": "Ville moyenne",
    "slug": "perpignan",
    "loyer": 390,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Nîmes",
    "region": "Occitanie",
    "type": "Ville moyenne",
    "slug": "nimes",
    "loyer": 410,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Avignon",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Ville moyenne",
    "slug": "avignon",
    "loyer": 430,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Aix-en-Provence",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Grande ville",
    "slug": "aix-en-provence",
    "loyer": 620,
    "transport": 32,
    "alimentation": 255,
    "divers": 38
  },
  {
    "name": "Toulon",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Ville moyenne",
    "slug": "toulon",
    "loyer": 500,
    "transport": 30,
    "alimentation": 235,
    "divers": 32
  },
  {
    "name": "Annecy",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville chère",
    "slug": "annecy",
    "loyer": 650,
    "transport": 30,
    "alimentation": 255,
    "divers": 38
  },
  {
    "name": "Chambéry",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "chambery",
    "loyer": 500,
    "transport": 30,
    "alimentation": 235,
    "divers": 32
  },
  {
    "name": "Bourg-en-Bresse",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "bourg-en-bresse",
    "loyer": 400,
    "transport": 25,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Ambérieu-en-Bugey",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville locale",
    "slug": "amberieu-en-bugey",
    "loyer": 380,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Lagnieu",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville locale",
    "slug": "lagnieu",
    "loyer": 360,
    "transport": 35,
    "alimentation": 215,
    "divers": 28
  },
  {
    "name": "Saint-Vulbas",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville locale",
    "slug": "saint-vulbas",
    "loyer": 370,
    "transport": 35,
    "alimentation": 215,
    "divers": 28
  },
  {
    "name": "Bourgoin-Jallieu",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "bourgoin-jallieu",
    "loyer": 430,
    "transport": 35,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Villeurbanne",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Grande ville",
    "slug": "villeurbanne",
    "loyer": 590,
    "transport": 25,
    "alimentation": 250,
    "divers": 36
  },
  {
    "name": "Bron",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville métropolitaine",
    "slug": "bron",
    "loyer": 540,
    "transport": 25,
    "alimentation": 240,
    "divers": 35
  },
  {
    "name": "Villefranche-sur-Saône",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "villefranche-sur-saone",
    "loyer": 430,
    "transport": 35,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Mâcon",
    "region": "Bourgogne-Franche-Comté",
    "type": "Ville moyenne",
    "slug": "macon",
    "loyer": 400,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Chalon-sur-Saône",
    "region": "Bourgogne-Franche-Comté",
    "type": "Ville moyenne",
    "slug": "chalon-sur-saone",
    "loyer": 390,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Auxerre",
    "region": "Bourgogne-Franche-Comté",
    "type": "Ville moyenne",
    "slug": "auxerre",
    "loyer": 390,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Troyes",
    "region": "Grand Est",
    "type": "Ville moyenne",
    "slug": "troyes",
    "loyer": 400,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Roanne",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "roanne",
    "loyer": 370,
    "transport": 30,
    "alimentation": 215,
    "divers": 28
  },
  {
    "name": "Valence",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "valence",
    "loyer": 400,
    "transport": 30,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Montélimar",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "montelimar",
    "loyer": 400,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Romans-sur-Isère",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "romans-sur-isere",
    "loyer": 380,
    "transport": 30,
    "alimentation": 220,
    "divers": 28
  },
  {
    "name": "Gap",
    "region": "Provence-Alpes-Côte d’Azur",
    "type": "Ville moyenne",
    "slug": "gap",
    "loyer": 430,
    "transport": 28,
    "alimentation": 225,
    "divers": 30
  },
  {
    "name": "Thonon-les-Bains",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville moyenne",
    "slug": "thonon-les-bains",
    "loyer": 560,
    "transport": 30,
    "alimentation": 240,
    "divers": 35
  },
  {
    "name": "Annemasse",
    "region": "Auvergne-Rhône-Alpes",
    "type": "Ville frontalière",
    "slug": "annemasse",
    "loyer": 650,
    "transport": 35,
    "alimentation": 255,
    "divers": 38
  },
  {
    "name": "Béziers",
    "region": "Occitanie",
    "type": "Ville moyenne",
    "slug": "beziers",
    "loyer": 380,
    "transport": 28,
    "alimentation": 220,
    "divers": 28
  }
];

function euro(id) { return Number(document.getElementById(id)?.value || 0); }
function fmt(n) { return Math.round(n).toLocaleString('fr-FR'); }
function byId(id) { return document.getElementById(id); }

function calculateBudget() {
  const loyer = euro('loyer');
  const alimentation = euro('alimentation');
  const transport = euro('transport');
  const tel = euro('telephone');
  const assurance = euro('assurance');
  const divers = euro('divers');
  const aides = euro('bourse') + euro('apl') + euro('famille') + euro('salaire');
  const depenses = loyer + alimentation + transport + tel + assurance + divers;
  const solde = aides - depenses;
  if (byId('totalDepenses')) byId('totalDepenses').textContent = fmt(depenses);
  if (byId('totalAides')) byId('totalAides').textContent = fmt(aides);
  if (byId('solde')) byId('solde').textContent = (solde >= 0 ? '+' : '-') + fmt(Math.abs(solde)) + ' €';
  const conclusion = byId('conclusion');
  const ville = byId('villeSelect')?.value || byId('villeNom')?.value || 'cette ville';
  if (conclusion) {
    if (solde >= 150) conclusion.innerHTML = `<span class="ok">Budget confortable :</span> il reste environ <strong>${fmt(solde)} €</strong> par mois à ${ville}. Garde quand même une marge pour les imprévus.`;
    else if (solde >= 0) conclusion.innerHTML = `<span class="ok">Budget jouable :</span> il reste environ <strong>${fmt(solde)} €</strong> par mois à ${ville}. C’est correct, mais pas large.`;
    else conclusion.innerHTML = `<span class="warn">Budget trop serré :</span> il manque environ <strong>${fmt(Math.abs(solde))} €</strong> par mois à ${ville}. Il faut baisser une dépense ou trouver une aide.`;
  }
}

function applyCityPreset(name) {
  const c = CITY_DATA.find(x => x.name === name);
  if (!c) return;
  if (byId('villeSelect')) byId('villeSelect').value = c.name;
  if (byId('villeNom')) byId('villeNom').value = c.name;
  if (byId('loyer')) byId('loyer').value = c.loyer;
  if (byId('transport')) byId('transport').value = c.transport;
  if (byId('alimentation')) byId('alimentation').value = c.alimentation;
  if (byId('divers')) byId('divers').value = 110 + c.divers;
  calculateBudget();
}

function applyProfilePreset() {
  const profil = byId('profil')?.value || 'Étudiant';
  if (profil === 'Étudiant') { byId('bourse').value = 350; byId('apl').value = 150; byId('salaire').value = 0; byId('famille').value = 100; }
  if (profil === 'Apprenti') { byId('bourse').value = 0; byId('apl').value = 120; byId('salaire').value = 850; byId('famille').value = 0; }
  if (profil === 'Lycéen') { byId('bourse').value = 0; byId('apl').value = 0; byId('salaire').value = 0; byId('famille').value = 250; }
  if (profil === 'Parent') { byId('bourse').value = 0; byId('apl').value = 120; byId('salaire').value = 0; byId('famille').value = 450; }
  calculateBudget();
}

function initCitySelect(defaultCity='Valence') {
  const select = byId('villeSelect');
  if (!select) return;
  select.innerHTML = CITY_DATA.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  if (CITY_DATA.some(c => c.name === defaultCity)) select.value = defaultCity;
  select.addEventListener('change', e => applyCityPreset(e.target.value));
}

function initCityList() {
  const grid = byId('cityGrid');
  if (!grid) return;
  renderCities(CITY_DATA);
  const search = byId('citySearch');
  const region = byId('regionFilter');
  const regions = [...new Set(CITY_DATA.map(c => c.region))].sort();
  if (region) region.innerHTML = '<option value="">Toutes les régions</option>' + regions.map(r => `<option>${r}</option>`).join('');
  function filter() {
    const q = (search?.value || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const r = region?.value || '';
    const filtered = CITY_DATA.filter(c => {
      const hay = (c.name + ' ' + c.region + ' ' + c.type).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      return (!q || hay.includes(q)) && (!r || c.region === r);
    });
    renderCities(filtered);
  }
  search?.addEventListener('input', filter);
  region?.addEventListener('change', filter);
}

function renderCities(list) {
  const grid = byId('cityGrid');
  if (!grid) return;
  grid.innerHTML = list.map(c => `<a class="city" href="villes/budget-etudiant-${c.slug}.html"><strong>${c.name}</strong><small>${c.region}</small><span class="pill">${c.type}</span></a>`).join('');
  const count = byId('cityCount');
  if (count) count.textContent = list.length;
}

function copyBudgetText() {
  const txt = `Budget estimatif :
Dépenses : ${byId('totalDepenses')?.textContent || '0'} €
Aides / revenus : ${byId('totalAides')?.textContent || '0'} €
Solde : ${byId('solde')?.textContent || '0 €'}`;
  navigator.clipboard?.writeText(txt);
  const b = byId('copyBtn');
  if (b) { b.textContent = 'Copié'; setTimeout(()=> b.textContent = 'Copier le résultat', 1200); }
}

document.addEventListener('DOMContentLoaded', () => {
  const defaultCity = document.body.dataset.city || 'Valence';
  initCitySelect(defaultCity);
  initCityList();
  applyCityPreset(defaultCity);
  applyProfilePreset();
  byId('profil')?.addEventListener('change', applyProfilePreset);
  document.querySelectorAll('input,select').forEach(el => el.addEventListener('input', calculateBudget));
  if (byId('year')) byId('year').textContent = new Date().getFullYear();
});