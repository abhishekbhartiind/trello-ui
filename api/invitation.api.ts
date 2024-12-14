import { ApiEndpoint } from '@/constants'
import { InviteUserToBoardPayload, SuccessResponse } from '@/models'
import axiosClient from './axios-client'

export const invitationApi = {
  inviteUserToBoard(payload: InviteUserToBoardPayload): Promise<SuccessResponse<any>> {
    return axiosClient.post(ApiEndpoint.INVITATION_INVITE_USER_TO_BOARD, payload)
  }
}
