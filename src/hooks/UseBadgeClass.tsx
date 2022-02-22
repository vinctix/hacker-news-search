import { useEffect, useState } from 'react';

type BadgeClass = 'score-s' | 'score-m' | 'score-l';

function getBadgeClass(score: number): BadgeClass  {
  if(score < 100) {
    return 'score-s';
  }
  if(score < 1000) {
    return 'score-m';
  }
  return 'score-l';
}

function useBadgeClass(score: number): string {
  const [badgeColor, setBadgeColor] = useState<BadgeClass>('score-s');

  useEffect(() => {
    const badgeClass = getBadgeClass(score);
    setBadgeColor(badgeClass);
  }, [score]);

  return badgeColor;
}

export default useBadgeClass;