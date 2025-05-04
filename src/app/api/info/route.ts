export async function GET() {
  return Response.json({
    name: 'Gabriel',
    sobrenome: 'Nunes de Matos',
    idade: 29,
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
  })
}