
export const initialDrivers = [
  { id: 1, name: 'Иванов Иван', car: 'Toyota Camry (А123ВС)', status: 'free' },
  { id: 2, name: 'Петров Пётр', car: 'Kia Rio (В456КМ)', status: 'busy' },
  { id: 3, name: 'Сидоров Сидор', car: 'Hyundai Solaris (С789НО)', status: 'offline' },
  { id: 4, name: 'Смирнов Алексей', car: 'Skoda Octavia (Е012ТУ)', status: 'free' },
  { id: 5, name: 'Кузнецова Елена', car: 'Renault Logan (Х345УК)', status: 'free' },
];


export const initialOrders = [
  { id: 101, time: '14:20', client: 'Анна К.', address: 'ул. Ленина, 15 → ул. Гагарина, 8', status: 'В пути', driver: 'Петров П.' },
  { id: 102, time: '14:15', client: 'Сергей В.', address: 'пр. Мира, 22 → аэропорт', status: 'Новый', driver: '—' },
  { id: 103, time: '14:10', client: 'Ольга М.', address: 'ул. Советская, 3 → ТЦ "Мега"', status: 'Завершён', driver: 'Иванов И.' },
  { id: 104, time: '14:05', client: 'Дмитрий П.', address: 'ул. Пушкина, 10 → вокзал', status: 'Отменён', driver: '—' },
  { id: 105, time: '14:00', client: 'Марина С.', address: 'ул. Садовая, 5 → ул. Зелёная, 17', status: 'Ожидание', driver: 'Смирнов А.' },
];


export const driverStatuses = [
  { value: 'free', label: '🟢 Свободен', color: '#4caf50' },
  { value: 'busy', label: '🔴 Занят', color: '#f44336' },
  { value: 'offline', label: '⚫ Не на смене', color: '#9e9e9e' },
];