import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Eye, MousePointer, TrendingUp, Globe, Clock, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ domain }) => {
  const [stats, setStats] = useState(null);
  const [topPages, setTopPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('7d');

  useEffect(() => {
    fetchStats();
  }, [domain, period]);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/stats/${domain}?period=${period}`);
      const data = await response.json();
      
      if (data.stats) {
        setStats(data.stats);
        setTopPages(data.topPages || []);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const chartColors = ['#6b46c1', '#1e3a8a', '#f59e0b', '#10b981', '#ef4444'];

  const MetricCard = ({ title, value, icon: Icon, trend, className }) => (
    <div className={cn(
      "enterprise-card rounded-xl p-6 border border-border/50",
      "transition-all duration-300 hover:shadow-lg hover:border-primary/30",
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">
            {loading ? '...' : value?.toLocaleString() || '0'}
          </p>
          {trend && (
            <p className={cn(
              "text-sm mt-1",
              trend > 0 ? "text-green-500" : "text-red-500"
            )}>
              {trend > 0 ? '+' : ''}{trend}% from last period
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );

  const PageViewsChart = () => {
    // Mock data - replace with real data from API
    const data = [
      { date: 'Mon', views: 1200 },
      { date: 'Tue', views: 1800 },
      { date: 'Wed', views: 1400 },
      { date: 'Thu', views: 2200 },
      { date: 'Fri', views: 1600 },
      { date: 'Sat', views: 900 },
      { date: 'Sun', views: 1100 }
    ];

    return (
      <div className="enterprise-card rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Page Views (Last 7 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="views" 
              stroke="#6b46c1" 
              strokeWidth={3}
              dot={{ fill: '#6b46c1', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const TopPagesChart = () => {
    const data = topPages.slice(0, 5).map((page, index) => ({
      name: page.url.replace(/^https?:\/\//, '').replace(/\/$/, '') || '/',
      views: page.views,
      color: chartColors[index % chartColors.length]
    }));

    return (
      <div className="enterprise-card rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af"
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="views" fill="#6b46c1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const DeviceChart = () => {
    const data = [
      { name: 'Desktop', value: 65, color: '#6b46c1' },
      { name: 'Mobile', value: 25, color: '#1e3a8a' },
      { name: 'Tablet', value: 10, color: '#f59e0b' }
    ];

    return (
      <div className="enterprise-card rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Device Types</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-muted-foreground">
                {item.name} ({item.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold hazy-text">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Tracking data for <span className="text-primary font-medium">{domain}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <select 
            value={period} 
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-card border border-border rounded-lg px-3 py-2 text-sm"
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="dashboard-grid">
        <MetricCard
          title="Total Visitors"
          value={stats?.unique_visitors}
          icon={Users}
          trend={12}
        />
        <MetricCard
          title="Page Views"
          value={stats?.total_events}
          icon={Eye}
          trend={8}
        />
        <MetricCard
          title="Unique Pages"
          value={stats?.unique_pages}
          icon={Globe}
          trend={-3}
        />
        <MetricCard
          title="Avg. Session"
          value="2m 34s"
          icon={Clock}
          trend={5}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PageViewsChart />
        <TopPagesChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeviceChart />
        <div className="lg:col-span-2">
          <div className="enterprise-card rounded-xl p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4">Real-time Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="status-indicator"></div>
                <span className="text-sm text-muted-foreground">12 active visitors</span>
              </div>
              <div className="space-y-2">
                {[
                  { time: '2s ago', action: 'Page view on /pricing', user: '192.168.1.1' },
                  { time: '5s ago', action: 'Click on CTA button', user: '10.0.0.1' },
                  { time: '12s ago', action: 'Form submission', user: '172.16.0.1' },
                  { time: '18s ago', action: 'Page view on /features', user: '192.168.1.2' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{activity.action}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>{activity.user}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
