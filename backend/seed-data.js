require('dotenv').config();
const bcrypt = require('bcrypt');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function seedData() {
  try {
    console.log('🌱 Iniciando seed de dados...\n');

    // === 1. Criar usuários de teste ===
    console.log('📝 Criando usuários...');
    const users = [
      { name: 'João Silva', email: 'joao@opticom.com.br', password: 'senha123', role: 'ADMIN' },
      { name: 'Ana Oliveira', email: 'ana@opticom.com.br', password: 'senha123', role: 'MANAGER' },
      { name: 'Carlos Souza', email: 'carlos@opticom.com.br', password: 'senha123', role: 'TECHNICIAN' },
    ];

    const hashedUsers = await Promise.all(
      users.map(async (u) => ({
        ...u,
        password_hash: await bcrypt.hash(u.password, 10),
      }))
    );

    const { data: createdUsers, error: usersError } = await supabase
      .from('users')
      .insert(hashedUsers.map(({ password, ...u }) => u))
      .select();

    if (usersError) throw usersError;
    console.log(`✅ ${createdUsers.length} usuários criados\n`);

    // === 2. Criar clientes ===
    console.log('👥 Criando clientes...');
    const customers = [
      { type: 'PJ', name: 'Empresa ABC Ltda', doc: '12.345.678/0001-90', city: 'S.J. Rio Preto', phone: '(17) 3333-0001', email: 'financeiro@abc.com.br', revenue: 15000000, active: true },
      { type: 'PJ', name: 'Hospital Regional', doc: '33.456.789/0001-11', city: 'Catanduva', phone: '(17) 3524-5000', email: 'ti@hospitalregional.com.br', revenue: 22000000, active: true },
      { type: 'PJ', name: 'Banco Meridional', doc: '56.789.012/0001-33', city: 'S.J. Rio Preto', phone: '(17) 3211-5500', email: 'infra@meridional.com.br', revenue: 18000000, active: true },
    ];

    const { data: createdCustomers, error: customersError } = await supabase
      .from('customers')
      .insert(customers)
      .select();

    if (customersError) throw customersError;
    console.log(`✅ ${createdCustomers.length} clientes criados\n`);

    // === 3. Criar técnicos ===
    console.log('🔧 Criando técnicos...');
    const technicians = [
      { name: 'Carlos Souza', phone: '(17) 98888-0000', email: 'carlos@opticom.com.br', specializations: ['Instalação', 'Manutenção Bateria'], status: 'ACTIVE' },
      { name: 'Paulo Mendes', phone: '(17) 97777-1111', email: 'paulo@opticom.com.br', specializations: ['Instalação', 'Emergência'], status: 'ACTIVE' },
      { name: 'Rafael Lima', phone: '(17) 96666-2222', email: 'rafael@opticom.com.br', specializations: ['Manutenção Preventiva', 'Revisão'], status: 'ACTIVE' },
    ];

    const { data: createdTechs, error: techsError } = await supabase
      .from('technicians')
      .insert(technicians)
      .select();

    if (techsError) throw techsError;
    console.log(`✅ ${createdTechs.length} técnicos criados\n`);

    // === 4. Criar contratos ===
    console.log('📋 Criando contratos...');
    const contracts = [
      { number: 'CTR-2026-001', customer_id: createdCustomers[0].id, type: 'MONTHLY', value: 500000, start_date: '2026-01-01', end_date: '2026-12-31', status: 'ACTIVE', sla_hours: 24 },
      { number: 'CTR-2026-002', customer_id: createdCustomers[1].id, type: 'ANNUAL', value: 850000, start_date: '2026-01-01', end_date: '2026-12-31', status: 'ACTIVE', sla_hours: 8 },
      { number: 'CTR-2026-003', customer_id: createdCustomers[2].id, type: 'MONTHLY', value: 900000, start_date: '2026-02-01', end_date: '2027-01-31', status: 'ACTIVE', sla_hours: 4 },
    ];

    const { data: createdContracts, error: contractsError } = await supabase
      .from('contracts')
      .insert(contracts)
      .select();

    if (contractsError) throw contractsError;
    console.log(`✅ ${createdContracts.length} contratos criados\n`);

    // === 5. Criar ordens de serviço ===
    console.log('🔨 Criando ordens de serviço...');
    const orders = [
      { number: 'OS-2026-00147', customer_id: createdCustomers[0].id, type: 'Instalação', priority: 'HIGH', status: 'IN_PROGRESS', assigned_technician_id: createdTechs[0].id, scheduled_date: '2026-04-05', substation: 'SE Empresa ABC — Sala de Energia', city: 'São José do Rio Preto', description: 'Instalação de sistema de energia ininterrupta com 3 nobreaks e banco de baterias.' },
      { number: 'OS-2026-00146', customer_id: createdCustomers[1].id, type: 'Manutenção', priority: 'URGENT', status: 'IN_TRANSIT', assigned_technician_id: createdTechs[1].id, scheduled_date: '2026-04-05', substation: 'SE Hospital — Bloco Cirúrgico', city: 'Catanduva', description: 'Manutenção corretiva em sistema de backup — servidor de dados crítico.' },
      { number: 'OS-2026-00145', customer_id: createdCustomers[2].id, type: 'Revisão', priority: 'HIGH', status: 'SCHEDULED', assigned_technician_id: createdTechs[0].id, scheduled_date: '2026-04-05', substation: 'SE Banco — Sala de Servidores', city: 'São José do Rio Preto', description: 'Revisão anual do sistema de energia.' },
    ];

    const { data: createdOrders, error: ordersError } = await supabase
      .from('orders')
      .insert(orders)
      .select();

    if (ordersError) throw ordersError;
    console.log(`✅ ${createdOrders.length} ordens de serviço criadas\n`);

    console.log('🎉 Seed concluído com sucesso!\n');
    console.log('📊 Resumo:');
    console.log(`   - Usuários: ${createdUsers.length}`);
    console.log(`   - Clientes: ${createdCustomers.length}`);
    console.log(`   - Técnicos: ${createdTechs.length}`);
    console.log(`   - Contratos: ${createdContracts.length}`);
    console.log(`   - Ordens: ${createdOrders.length}`);
    console.log('\n✨ Use o email: joao@opticom.com.br / senha: senha123 para fazer login');

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

seedData();
