export const standard = () => {
  return {
    count: 12,
    label: 'Test',
    euros: '23,89€',
  }
}

export const withPercent = () => {
  return {
    ...standard(),
    percent: '14,8%',
  }
}
