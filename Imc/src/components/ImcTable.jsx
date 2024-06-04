function ImcTable({weight, height, imc, table, imcTable}) {
    

    
    return(
        <div className={table}>
            <table className="table-auto w-full h-24 text-center">
                <thead>
                    <tr className="border-b">
                    <th>Peso</th>
                    <th>Altura</th>
                    <th>IMC</th>
                    <th>Resultado</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 text-sm">{weight}kg</td>
                        <td className="p-4 text-sm">{height}m</td>
                        <td className="p-4 text-sm">{imc}</td>
                        <td className="p-4 text-sm">{imcTable}</td>
                    </tr>
                </tbody>
            </table>
    
            <table className="w-full text-center">
                <thead className="bg-gray-100 text-red-500">
                    <tr>
                        <th className="p-4">IMC</th>
                        <th className="p-4">Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="p-4 text-sm">Menos de 17</td>
                        <td className="p-4 text-sm">Muito abaixo do peso</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-4 text-sm">Entre 17 e 18.49</td>
                        <td className="p-4 text-sm">Abaixo do peso</td>
                    </tr>
                    <tr className="">
                        <td className="p-4 text-sm">Entre 18.5 e 24.99</td>
                        <td className="p-4 text-sm">Peso Normal</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-4 text-sm">Entre 25 e 29.99</td>
                        <td className="p-4 text-sm">Acima do peso</td>
                    </tr>
                    <tr className="">
                        <td className="p-4 text-sm">Entre 30 e 34.99</td>
                        <td className="p-4 text-sm">Obesidade I</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-4 text-sm">Entre 35 e 39.99</td>
                        <td className="p-4 text-sm">Obesidade II (Severa)</td>
                    </tr>
                    <tr className="">
                        <td className="p-4 text-sm">Entre 40</td>
                        <td className="p-4 text-sm">Obesidade III (Mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ImcTable