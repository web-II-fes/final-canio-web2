export class Paquete {
    constructor(
		public nombreRemit: string,
        public direccionRemit: string,
        public nombreDestin: string,
        public direccionDestin: string,
        public descripcionPaq: string,
        public fechaEntrega: Date
    ){}
}