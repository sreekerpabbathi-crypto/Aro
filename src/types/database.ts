export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          user_id: string
          email: string
          role: 'super_admin' | 'admin' | 'manager'
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          email: string
          role?: 'super_admin' | 'admin' | 'manager'
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['admin_users']['Insert']>
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          avatar_url: string | null
          role: 'customer' | 'restaurant' | 'admin'
          restaurant_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          phone?: string | null
          avatar_url?: string | null
          role?: 'customer' | 'restaurant' | 'admin'
          restaurant_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      addresses: {
        Row: {
          id: string
          profile_id: string
          label: string
          recipient_name: string
          recipient_phone: string
          address_line1: string
          address_line2: string | null
          landmark: string | null
          city: string
          pincode: string
          latitude: number
          longitude: number
          is_default: boolean
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          label?: string
          recipient_name: string
          recipient_phone: string
          address_line1: string
          address_line2?: string | null
          landmark?: string | null
          city?: string
          pincode: string
          latitude: number
          longitude: number
          is_default?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['addresses']['Insert']>
      }
      restaurants: {
        Row: {
          id: string
          name: string
          slug: string
          tagline: string
          description: string
          cover_image: string
          logo_image: string | null
          rating: number
          rating_count: number
          price_tier: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹'
          delivery_time_min: number
          delivery_time_max: number
          minimum_order: number
          delivery_fee: number
          packaging_fee: number
          is_featured: boolean
          is_open: boolean
          address_line: string
          city: string
          latitude: number
          longitude: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          tagline: string
          description: string
          cover_image: string
          logo_image?: string | null
          rating?: number
          rating_count?: number
          price_tier?: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹'
          delivery_time_min: number
          delivery_time_max: number
          minimum_order?: number
          delivery_fee?: number
          packaging_fee?: number
          is_featured?: boolean
          is_open?: boolean
          address_line: string
          city?: string
          latitude: number
          longitude: number
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['restaurants']['Insert']>
      }
      categories: {
        Row: {
          id: string
          restaurant_id: string
          name: string
          slug: string
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          name: string
          slug: string
          display_order?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['categories']['Insert']>
      }
      menu_items: {
        Row: {
          id: string
          restaurant_id: string
          category_id: string
          name: string
          description: string
          price: number
          image_url: string | null
          is_veg: boolean
          is_chef_special: boolean
          is_available: boolean
          prep_time_minutes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          category_id: string
          name: string
          description: string
          price: number
          image_url?: string | null
          is_veg?: boolean
          is_chef_special?: boolean
          is_available?: boolean
          prep_time_minutes?: number
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['menu_items']['Insert']>
      }
      menu_item_option_groups: {
        Row: {
          id: string
          menu_item_id: string
          name: string
          min_select: number
          max_select: number
          is_required: boolean
          created_at: string
        }
        Insert: {
          id?: string
          menu_item_id: string
          name: string
          min_select?: number
          max_select?: number
          is_required?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['menu_item_option_groups']['Insert']>
      }
      menu_item_options: {
        Row: {
          id: string
          group_id: string
          name: string
          additional_price: number
          is_default: boolean
          created_at: string
        }
        Insert: {
          id?: string
          group_id: string
          name: string
          additional_price?: number
          is_default?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['menu_item_options']['Insert']>
      }
      carts: {
        Row: {
          id: string
          profile_id: string | null
          restaurant_id: string | null
          session_token: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id?: string | null
          restaurant_id?: string | null
          session_token?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['carts']['Insert']>
      }
      cart_items: {
        Row: {
          id: string
          cart_id: string
          menu_item_id: string
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          cart_id: string
          menu_item_id: string
          quantity?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['cart_items']['Insert']>
      }
      cart_item_options: {
        Row: {
          id: string
          cart_item_id: string
          option_id: string
        }
        Insert: {
          id?: string
          cart_item_id: string
          option_id: string
        }
        Update: Partial<Database['public']['Tables']['cart_item_options']['Insert']>
      }
      coupons: {
        Row: {
          id: string
          code: string
          description: string
          discount_percentage: number | null
          flat_discount: number | null
          min_order_value: number
          max_discount: number | null
          start_date: string
          valid_until: string
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          description: string
          discount_percentage?: number | null
          flat_discount?: number | null
          min_order_value?: number
          max_discount?: number | null
          start_date?: string
          valid_until: string
          is_active?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['coupons']['Insert']>
      }
      coupon_redemptions: {
        Row: {
          id: string
          coupon_id: string
          profile_id: string
          order_id: string
          discount_applied: number
          redeemed_at: string
        }
        Insert: {
          id?: string
          coupon_id: string
          profile_id: string
          order_id: string
          discount_applied: number
          redeemed_at?: string
        }
        Update: Partial<Database['public']['Tables']['coupon_redemptions']['Insert']>
      }
      orders: {
        Row: {
          id: string
          order_number: string
          profile_id: string
          restaurant_id: string
          restaurant_name_snapshot: string
          restaurant_address_snapshot: string
          status: string
          item_total: number
          delivery_fee: number
          packaging_fee: number
          tax_amount: number
          discount_amount: number
          final_paid_amount: number
          coupon_id: string | null
          payment_method: string
          payment_status: string
          delivery_address_json: Json
          customer_notes: string | null
          placed_at: string
          delivered_at: string | null
        }
        Insert: {
          id?: string
          order_number: string
          profile_id: string
          restaurant_id: string
          restaurant_name_snapshot: string
          restaurant_address_snapshot: string
          status?: string
          item_total: number
          delivery_fee?: number
          packaging_fee?: number
          tax_amount?: number
          discount_amount?: number
          final_paid_amount: number
          coupon_id?: string | null
          payment_method?: string
          payment_status?: string
          delivery_address_json: Json
          customer_notes?: string | null
          placed_at?: string
          delivered_at?: string | null
        }
        Update: Partial<Database['public']['Tables']['orders']['Insert']>
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_item_id: string
          item_name_snapshot: string
          item_price_snapshot: number
          quantity: number
          total_price_snapshot: number
        }
        Insert: {
          id?: string
          order_id: string
          menu_item_id: string
          item_name_snapshot: string
          item_price_snapshot: number
          quantity?: number
          total_price_snapshot: number
        }
        Update: Partial<Database['public']['Tables']['order_items']['Insert']>
      }
      order_item_options: {
        Row: {
          id: string
          order_item_id: string
          option_name_snapshot: string
          additional_price_snapshot: number
        }
        Insert: {
          id?: string
          order_item_id: string
          option_name_snapshot: string
          additional_price_snapshot?: number
        }
        Update: Partial<Database['public']['Tables']['order_item_options']['Insert']>
      }
      favorites: {
        Row: {
          id: string
          profile_id: string
          restaurant_id: string | null
          menu_item_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          restaurant_id?: string | null
          menu_item_id?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['favorites']['Insert']>
      }
      reviews: {
        Row: {
          id: string
          restaurant_id: string
          profile_id: string
          order_id: string | null
          rating: number
          review_text: string | null
          created_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          profile_id: string
          order_id?: string | null
          rating: number
          review_text?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>
      }
      order_status_history: {
        Row: {
          id: string
          order_id: string
          from_status: string | null
          to_status: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          from_status?: string | null
          to_status: string
          notes?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['order_status_history']['Insert']>
      }
      deliveries: {
        Row: {
          id: string
          order_id: string
          rider_name: string
          rider_phone: string
          vehicle_number: string
          current_status: string
          current_latitude: number
          current_longitude: number
          estimated_arrival_minutes: number
          route_polyline_json: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_id: string
          rider_name?: string
          rider_phone?: string
          vehicle_number?: string
          current_status?: string
          current_latitude: number
          current_longitude: number
          estimated_arrival_minutes?: number
          route_polyline_json?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['deliveries']['Insert']>
      }
      delivery_location_updates: {
        Row: {
          id: string
          delivery_id: string
          latitude: number
          longitude: number
          recorded_at: string
        }
        Insert: {
          id?: string
          delivery_id: string
          latitude: number
          longitude: number
          recorded_at?: string
        }
        Update: Partial<Database['public']['Tables']['delivery_location_updates']['Insert']>
      }
      notifications: {
        Row: {
          id: string
          profile_id: string
          order_id: string | null
          title: string
          message: string
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          order_id?: string | null
          title: string
          message: string
          is_read?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['notifications']['Insert']>
      }
    }
  }
}
