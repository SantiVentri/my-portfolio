export default function LoadingScreen() {
    return (
        <div style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: 'var(--PrimaryColor)',
            height: '100vh',
            width: '100vw'
        }}>
            <h1>Loading...</h1>
        </div>
    )
}