export const backUrl = 'http://localhost:3065'

export const convertCertType = (type) => {
  const types = ['',
    '매일',
    '평일 매일',
    '주말 매일',
    '주 6일',
    '주 5일',
    '주 4일',
    '주 3일',
    '주 2일',
    '주 1일'
  ]
  return types[type]
}