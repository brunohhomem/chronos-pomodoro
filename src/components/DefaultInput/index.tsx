import styles from './styles.module.css'

type DefaultInputProps = {
  id: string
  labelText?: string
} & React.ComponentProps<'input'>

export function DefaultInput({ type, id, labelText, placeholder }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} placeholder={placeholder} />
    </>
  )
}