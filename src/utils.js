export const formatDate = (date) => {
  const dateFormatted = new Date(date)
  return dateFormatted.toLocaleDateString('pt-BR')
}
