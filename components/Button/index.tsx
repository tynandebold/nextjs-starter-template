export function Button({ text }: { text: string }) {
  return (
    <button
      onClick={() => {
        window.alert('With typescript and Jest')
      }}
    >
      {text}
    </button>
  )
}
