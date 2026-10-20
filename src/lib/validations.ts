import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signupSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number')
    .optional()
    .or(z.literal('')),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const addressSchema = z.object({
  label: z.enum(['Home', 'Work', 'Other']),
  recipientName: z.string().min(2, 'Recipient name is required'),
  recipientPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  addressLine1: z.string().min(5, 'Flat / House No. / Street is required'),
  addressLine2: z.string().optional(),
  landmark: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit PIN code'),
  isDefault: z.boolean().default(false),
})

export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  reviewText: z.string().min(5, 'Review must be at least 5 characters').max(500),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type AddressFormData = z.infer<typeof addressSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
