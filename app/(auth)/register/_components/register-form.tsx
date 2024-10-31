'use client'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthSchema } from '@/app/(auth)/_hooks'
import FieldErrorAlert from '@/components/field-error-alert'

export function RegisterForm() {
  const schema = useAuthSchema()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleRegister = (payload: any) => {}

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Box sx={{ padding: '0 1em 1em 1em' }}>
        <Box sx={{ marginTop: '1em' }}>
          <TextField
            autoFocus
            fullWidth
            label="Enter Email..."
            type="text"
            variant="outlined"
            {...register('email')}
          />

          <FieldErrorAlert errors={errors} fieldName="email" />
        </Box>

        <Box sx={{ marginTop: '1em' }}>
          <TextField
            fullWidth
            label="Enter Password..."
            type="password"
            variant="outlined"
            {...register('password')}
          />

          <FieldErrorAlert errors={errors} fieldName="password" />
        </Box>

        <Box sx={{ marginTop: '1em' }}>
          <TextField
            fullWidth
            label="Enter Password Confirmation..."
            type="password"
            variant="outlined"
            {...register('confirm_password')}
          />
        </Box>

        <FieldErrorAlert errors={errors} fieldName="confirm_password" />
      </Box>

      <CardActions sx={{ padding: '0 1em 1em 1em' }}>
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          Register
        </Button>
      </CardActions>
    </form>
  )
}