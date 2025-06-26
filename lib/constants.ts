// Constantes para los valores que antes eran enums

export const USER_ROLES = {
  CUSTOMER: "CUSTOMER",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
} as const

export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
} as const

export const PAYMENT_METHODS = {
  CREDIT_CARD: "CREDIT_CARD",
  DEBIT_CARD: "DEBIT_CARD",
  BANK_TRANSFER: "BANK_TRANSFER",
  CASH_ON_DELIVERY: "CASH_ON_DELIVERY",
  WEBPAY: "WEBPAY",
  MERCADOPAGO: "MERCADOPAGO",
} as const

export const PAYMENT_STATUS = {
  PENDING: "PENDING",
  PAID: "PAID",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED",
} as const

export type UserRole = keyof typeof USER_ROLES
export type OrderStatus = keyof typeof ORDER_STATUS
export type PaymentMethod = keyof typeof PAYMENT_METHODS
export type PaymentStatus = keyof typeof PAYMENT_STATUS
