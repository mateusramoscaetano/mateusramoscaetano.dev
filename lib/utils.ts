export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long'
  });
};

export const getSkillLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'violet';
    case 'advanced':
      return 'blue';
    case 'intermediate':
      return 'pink';
    case 'beginner':
      return 'gray';
    default:
      return 'gray';
  }
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getGradientColors = (index: number) => {
  const gradients = [
    'from-violet-500 to-pink-500',
    'from-blue-500 to-purple-600',
    'from-pink-500 to-red-500',
    'from-green-500 to-blue-500',
    'from-yellow-500 to-orange-500',
    'from-purple-500 to-indigo-500'
  ];
  return gradients[index % gradients.length];
}; 