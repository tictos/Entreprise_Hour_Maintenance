export interface StatusInfo {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  currentDayName: string;
  currentTimeString: string;
}

export function getCompanyCurrentStatus(): StatusInfo {
  // Conakry / Guinea is in UTC+0 timezone (GMT)
  const now = new Date();
  
  // Format current UTC time (representing Guinea local time)
  const utcDay = now.getUTCDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  
  const currentMinutesFromMidnight = utcHours * 60 + utcMinutes;
  const openMinutes = 8 * 60; // 08h00
  const closeMinutes = 17 * 60; // 17h00
  
  const dayNamesFr = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  
  const currentDayName = dayNamesFr[utcDay];
  const timeFormatted = `${String(utcHours).padStart(2, '0')}h${String(utcMinutes).padStart(2, '0')} GMT`;

  const isWeekday = utcDay >= 1 && utcDay <= 5;
  const isWithinHours = currentMinutesFromMidnight >= openMinutes && currentMinutesFromMidnight < closeMinutes;

  if (isWeekday && isWithinHours) {
    const remainingMinutes = closeMinutes - currentMinutesFromMidnight;
    const remainingHours = Math.floor(remainingMinutes / 60);
    const remMins = remainingMinutes % 60;
    
    return {
      isOpen: true,
      statusText: "Ouvert actuellement",
      nextEventText: `Fermeture à 17h00 (dans ${remainingHours > 0 ? `${remainingHours}h` : ''}${remMins}min)`,
      currentDayName,
      currentTimeString: timeFormatted
    };
  } else {
    let nextOpen = "Lundi à 08h00";
    if (isWeekday && currentMinutesFromMidnight < openMinutes) {
      nextOpen = `Aujourd'hui à 08h00`;
    } else if (utcDay >= 1 && utcDay <= 4 && currentMinutesFromMidnight >= closeMinutes) {
      nextOpen = `Demain (${dayNamesFr[utcDay + 1]}) à 08h00`;
    } else if (utcDay === 5 && currentMinutesFromMidnight >= closeMinutes) {
      nextOpen = "Lundi à 08h00";
    }

    return {
      isOpen: false,
      statusText: "Fermé actuellement",
      nextEventText: `Prochaine ouverture : ${nextOpen}`,
      currentDayName,
      currentTimeString: timeFormatted
    };
  }
}
