export const ApiEndpoint = {
  AUTH_REGISTER: '/v1/api/users/register',
  AUTH_LOGIN: '/v1/api/users/login',
  AUTH_LOGOUT: '/v1/api/users/logout',
  AUTH_REFRESH_TOKEN: '/v1/api/users/refreshToken',
  VERIFY_USER: '/v1/api/users/verify',
  BOARD_GET_LIST: '/v1/api/boards',
  BOARD_GET_DETAIL: '/v1/api/boards/{boardId}',
  BOARD_UPDATE: '/v1/api/boards/{boardId}',
  BOARD_MOVE_CARD_TO_DIFFERENT_COLUMN: '/v1/api/boards/supports/moving_card',
  INVITATION_INVITE_USER_TO_BOARD: '/v1/api/invitations/board',
  COLUMN_ADD: '/v1/api/columns',
  COLUMN_UPDATE: '/v1/api/columns/{columnId}',
  COLUMN_DELETE: '/v1/api/columns/{columnId}',
  CARD_ADD: '/v1/api/cards',
  CARD_UPDATE: '/v1/api/cards/{cardId}',
  USER_UPDATE: '/v1/api/users'
}
