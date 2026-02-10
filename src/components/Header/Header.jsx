import * as S from './Header.styled'

export const Header = ({ onLogout }) => {
    return (
        <S.Header>
            <S.HeaderBlock>Шапочка</S.HeaderBlock>
            {onLogout && (
                <S.LogoutButton onClick={onLogout}>Выйти</S.LogoutButton>
            )}
        </S.Header>
    )
}
