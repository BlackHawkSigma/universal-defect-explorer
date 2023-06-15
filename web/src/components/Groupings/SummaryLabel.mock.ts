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
    percent: 0.148,
  }
}

export const withoutEuros = () => {
  return {
    count: 13,
    label: 'Test',
    percent: 0.258,
  }
}
